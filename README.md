# 🧪 Flask Clean Architecture

[![Python 3.8+](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Code Style: Black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)

A modern Flask application template implementing clean architecture principles. This project provides a well-structured foundation for building web applications with clear separation of concerns and maintainable code.

> 💡 **Key Feature**: JavaScript-driven frontend with Flask handling template rendering

---

## 📑 Table of Contents

- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Data Flow](#data-flow)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [License](#license)

---

## 🏗️ Architecture Overview

This project follows Clean Architecture principles with a JavaScript-heavy frontend approach:
- Flask serves as a lightweight backend primarily for template rendering
- JavaScript handles all API interactions and dynamic functionality
- Clear separation between presentation and business logic

### 📁 Project Structure

```
/app
    /routes              # Simple Flask routes for template rendering
    /static              # Static assets (CSS, JavaScript, images)
       /css              # Stylesheet files
       /js               # JavaScript files
           /helpers      # Helper JavaScript utilities
               api.js    # Handles API requests and responses
               dom.js    # DOM manipulation utilities
               utils.js  # General utility functions
           /services     # Business logic services
               userService.js # User-related functionality
           config.js     # Frontend configuration
           main.js       # Main JavaScript entry point
    /templates           # Jinja2 HTML templates
        /admin           # Templates for admin panel
        /auth            # Authentication-related templates
        /components      # Reusable template components
        /general-users   # Templates for regular users
        /profiles        # User profile templates
        base.html        # Base template layout
        overview.html    # Overview web page template
    /tests               # Test suite
main.py                  # Application entry point
```

## 🔄 Data Flow

This application follows a JavaScript-centric approach with Flask providing the initial rendering:

1. **Initial Request**: Flask routes (`/app/routes/route.py`) handle the initial request and render Jinja templates
2. **Frontend Initialization**: JavaScript loads and initializes the client-side application
3. **API Interaction**: 
   - JavaScript modules in `/app/static/js/helpers/api.js` handle all API calls
   - `/app/static/js/services/` contain business logic for different domains
4. **DOM Updates**: JavaScript updates the UI based on API responses
5. **State Management**: JavaScript manages application state on the client side

> This approach minimizes server-side processing and creates a responsive, dynamic user experience while leveraging Flask's excellent templating capabilities.

---

## 🚀 Getting Started

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- Virtual environment tool (recommended: venv)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/flask-clean-architecture.git
   cd flask-clean-architecture
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   
   # On Windows
   venv\Scripts\activate
   
   # On macOS/Linux
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Edit the config file with your configuration values in `/app/static/js/config.js`

---

## ▶️ Running the Application

1. Make sure your virtual environment is activated
2. Run the application:
   ```bash
   flask --app "your-directory\main.py" run
   ```
   
   For development mode with auto-reload:
   ```bash
   flask --app "your-directory\main.py" --debug run
   ```
3. Access the application in your browser at `http://localhost:5000`
4. The Flask server will handle initial page renders, then JavaScript takes over for all API interactions

---

## 🧪 Testing **(In-development)**

Run tests using pytest:
```bash
pytest
```

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">
  <sub>Built with ❤️ by panjidwisatrio</sub>
</div>
