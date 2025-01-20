## Tech Stack

- **Frontend**  
  - **React** (with Hooks and functional components)  
  - **React Router** (optional, for routing)  
  - **CSS** (Bootstrap, Tailwind, or custom)  
  - **Axios or Fetch** for API calls

- **Backend**  
  - **Django** (Python 3.x)  
  - **Django REST Framework** (if RESTful API)  
  - **SQLite / PostgreSQL / MySQL** (choose one as your DB)

- **Additional Tools**  
  - **Git** for version control  
  - **npm / yarn** for managing frontend dependencies  
  - **pip** or **pipenv** for Python dependencies

---
# How to Run This Conference Management Project (React + Django)

## 1. Run the Backend (Django)

1. **Clone** the repository (or download the source):
   ```bash
   git clone https://github.com/<your-username>/conference_management.git
cd conference_management/backend
python3 -m venv venv
source venv/bin/activate   # On macOS/Linux
# or:
venv\Scripts\activate.bat  # On Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver


2. Run the Frontend (React)
Open a new terminal and navigate to the frontend folder:
cd ../frontend
npm install
npm start
