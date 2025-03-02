import CONFIG from "../config.js";  

// Helper function to handle common request logic
async function makeRequest(endpoint, method = "GET", data = null, options = {}) {
    try {
        // Handle query parameters for GET requests
        let url = `${CONFIG.BASE_URL}${endpoint}`;
        if (method === "GET" && options.params) {
            const queryParams = new URLSearchParams();
            for (const [key, value] of Object.entries(options.params)) {
                queryParams.append(key, value);
            }
            url = `${url}?${queryParams.toString()}`;
        }
        
        // Setup request options
        const requestOptions = {
            method,
            headers: {
                "Content-Type": "application/json",
                ...options.headers
            },
            credentials: "include",
            ...options
        };
        
        // Handle request body for non-GET methods
        if (method !== "GET" && data) {
            if (data instanceof FormData) {
                // If FormData is passed, remove the Content-Type header to let browser set it
                delete requestOptions.headers["Content-Type"];
                requestOptions.body = data;
            } else {
                requestOptions.body = JSON.stringify(data);
            }
        }
        
        const response = await fetch(url, requestOptions);
        
        if (response.ok) {
            // Check if response is empty or not JSON
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                return await response.json();
            }
            return await response.text();
        }
        
        if (method === "GET" && response.status === 404) {
            return null;
        }

        if (response.status === 401) {
            location.replace("/login");
        } else if (response.status === 400) {
            const data = await response.json();
            if (!options.suppressAlerts) {
                alert(data.message);
            }
        } else {
            location.replace(`/error?status=${response.status}`);
        }
        
        return null;
    } catch (error) {
        console.error(error);
        if (!options.suppressAlerts) {
            alert("Failed to fetch data. Please try again.");
        }
        return null;
    }
}

async function fetchData(endpoint, options = {}) {
    return makeRequest(endpoint, "GET", null, options);
}

async function postData(endpoint, data, options = {}) {
    return makeRequest(endpoint, "POST", data, options);
}

async function patchData(endpoint, data, options = {}) {
    return makeRequest(endpoint, "PATCH", data, options);
}

async function deleteData(endpoint, options = {}) {
    return makeRequest(endpoint, "DELETE", null, options);
}

export { fetchData, postData, patchData, deleteData };
// The fetchData function is a simple wrapper around the fetch API that fetches data from the API base URL (CONFIG.BASE_URL) and the specified endpoint. 
// If the request fails, it logs an error and returns null.