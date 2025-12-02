# Lab01: Flask, Gunicorn, Docker, JSON, and jQuery

### Step - 0: Folder Structure

```
flaskApp0
├── .gitignore
├── Dockerfile
├── Pipfile
├── Pipfile.lock
├── app
│   ├── __init__.py
│   ├── static
│   │   └── phonebook.html
│   ├── templates
│   └── views.py
├── build_docker.sh
├── gunicorn_starter.sh
├── main.py
└── requirements.txt
```

#### `.gitignore`
```bash
# Byte-compiled / optimized / DLL files
__pycache__/
*.py[codz]
*$py.class

# C extensions
*.so

# Distribution / packaging
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
share/python-wheels/
*.egg-info/
.installed.cfg
*.egg
MANIFEST

# PyInstaller
#   Usually these files are written by a python script from a template
#   before PyInstaller builds the exe, so as to inject date/other infos into it.
*.manifest
*.spec

# Installer logs
pip-log.txt
pip-delete-this-directory.txt

# Unit test / coverage reports
htmlcov/
.tox/
.nox/
.coverage
.coverage.*
.cache
nosetests.xml
coverage.xml
*.cover
*.py.cover
.hypothesis/
.pytest_cache/
cover/

# Translations
*.mo
*.pot

# Django stuff:
*.log
local_settings.py
db.sqlite3
db.sqlite3-journal

# Flask stuff:
instance/
.webassets-cache

# Scrapy stuff:
.scrapy

# Sphinx documentation
docs/_build/

# PyBuilder
.pybuilder/
target/

# Jupyter Notebook
.ipynb_checkpoints

# IPython
profile_default/
ipython_config.py

# pyenv
#   For a library or package, you might want to ignore these files since the code is
#   intended to run in multiple environments; otherwise, check them in:
# .python-version

# pipenv
#   According to pypa/pipenv#598, it is recommended to include Pipfile.lock in version control.
#   However, in case of collaboration, if having platform-specific dependencies or dependencies
#   having no cross-platform support, pipenv may install dependencies that don't work, or not
#   install all needed dependencies.
# Pipfile.lock

# UV
#   Similar to Pipfile.lock, it is generally recommended to include uv.lock in version control.
#   This is especially recommended for binary packages to ensure reproducibility, and is more
#   commonly ignored for libraries.
# uv.lock

# poetry
#   Similar to Pipfile.lock, it is generally recommended to include poetry.lock in version control.
#   This is especially recommended for binary packages to ensure reproducibility, and is more
#   commonly ignored for libraries.
#   https://python-poetry.org/docs/basic-usage/#commit-your-poetrylock-file-to-version-control
# poetry.lock
# poetry.toml

# pdm
#   Similar to Pipfile.lock, it is generally recommended to include pdm.lock in version control.
#   pdm recommends including project-wide configuration in pdm.toml, but excluding .pdm-python.
#   https://pdm-project.org/en/latest/usage/project/#working-with-version-control
# pdm.lock
# pdm.toml
.pdm-python
.pdm-build/

# pixi
#   Similar to Pipfile.lock, it is generally recommended to include pixi.lock in version control.
# pixi.lock
#   Pixi creates a virtual environment in the .pixi directory, just like venv module creates one
#   in the .venv directory. It is recommended not to include this directory in version control.
.pixi

# PEP 582; used by e.g. github.com/David-OConnor/pyflow and github.com/pdm-project/pdm
__pypackages__/

# Celery stuff
celerybeat-schedule
celerybeat.pid

# Redis
*.rdb
*.aof
*.pid

# RabbitMQ
mnesia/
rabbitmq/
rabbitmq-data/

# ActiveMQ
activemq-data/

# SageMath parsed files
*.sage.py

# Environments
.env
.envrc
.venv
env/
venv/
ENV/
env.bak/
venv.bak/

# Spyder project settings
.spyderproject
.spyproject

# Rope project settings
.ropeproject

# mkdocs documentation
/site

# mypy
.mypy_cache/
.dmypy.json
dmypy.json

# Pyre type checker
.pyre/

# pytype static type analyzer
.pytype/

# Cython debug symbols
cython_debug/

# PyCharm
#   JetBrains specific template is maintained in a separate JetBrains.gitignore that can
#   be found at https://github.com/github/gitignore/blob/main/Global/JetBrains.gitignore
#   and can be added to the global gitignore or merged into this file.  For a more nuclear
#   option (not recommended) you can uncomment the following to ignore the entire idea folder.
# .idea/

# Abstra
#   Abstra is an AI-powered process automation framework.
#   Ignore directories containing user credentials, local state, and settings.
#   Learn more at https://abstra.io/docs
.abstra/

# Visual Studio Code
#   Visual Studio Code specific template is maintained in a separate VisualStudioCode.gitignore 
#   that can be found at https://github.com/github/gitignore/blob/main/Global/VisualStudioCode.gitignore
#   and can be added to the global gitignore or merged into this file. However, if you prefer, 
#   you could uncomment the following to ignore the entire vscode folder
# .vscode/

# Ruff stuff:
.ruff_cache/

# PyPI configuration file
.pypirc

# Marimo
marimo/_static/
marimo/_lsp/
__marimo__/

# Streamlit
.streamlit/secrets.toml

```

#### `main.py`
```python
from app import app
```

#### `__init__.py`
```python
from flask import Flask
app = Flask(__name__)
from app import views # noqa
```

#### `view.html`
```html
from app import app
from flask import jsonify


@app.route('/')
def home():
    return "Ice Says: Hello World!"

@app.route('/phonebook')
def index():
    return app.send_static_file('phonebook.html')

# This route serves the dictionary d at the route /data
@app.route("/api/data")
def data():
    # define some data
    d = {
        "Alice": "(708) 727-2377",
        "Ice": "(66) 981740744"
    }
    return jsonify(d)  # convert your data to JSON and return

```

#### `requirements.txt`
```txt
Flask==2.2.2
gunicorn==23.0.0
Werkzeug==2.2.2
```

#### `gunicorn_starter.sh`
```bash
#!/bin/sh
gunicorn main:app --chdir app -w 2 --threads 2 -b 0.0.0.0:8000 --reload
exec "$@"
```

#### `build_docker.sh`
```bash
#!/bin/sh
app="docker.test"
docker build -t ${app} .
docker run -p 56733:8000 -d \
  --name=${app} \
  -v $PWD:/flask_app ${app}
```

#### `Dockerfile`
```
# Build stage
FROM python:3.12-alpine3.22 AS build


# Set work directory
WORKDIR /flask_app


# Update system & install build dependencies + curl for uv installer
RUN apk update && apk --no-cache add git gcc libc-dev libffi-dev curl


# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /usr/local/bin/uv


# Install dependencies
COPY ./requirements.txt /flask_app/
RUN --mount=type=cache,target=/root/.cache/uv \
   uv pip install --system --no-cache -r requirements.txt




# Application image
FROM python:3.12-alpine3.22
# Set work directory
WORKDIR /flask_app


# Prevent Python from writing pyc files & buffering
ENV PYTHONDONTWRITEBYTECODE=1 \
   PYTHONUNBUFFERED=1 \
   PATH="/flask_app/bin:$PATH"


# Copy installed dependencies from the build stage
COPY --from=build \
   /usr/local/lib/python3.12/site-packages \
   /usr/local/lib/python3.12/site-packages


# copy console scripts 
COPY --from=build /usr/local/bin /usr/local/bin


# Specify the entry point
ENTRYPOINT [ "./gunicorn_starter.sh" ]


# Keep the Docker process running even when crashes
CMD ["tail", "-f", "/dev/null"]
```

### Step - 0: Create an empty private git repository on github 
```
git config --global user.email "<github email>"
git config --global user.name "<your name>"
git config --global init.defaultBranch main
```

### Step - 0: Edit the ~/.bashrc file
Make sure that in your .bashrc file there is the following line:
```
export PYTHONDONTWRITEBYTECODE=1
```

### Step - 0: Pip

```
python3 -m pip -V
```

Install pip GLOBALLY with sudo access (your own computer)
```bash
wget --no-check-certificate https://bootstrap.pypa.io/get-pip.py  
sudo python3 get-pip.py
```

Install pip LOCALLY for the current user (for the Lab’s machines)
```bash
wget --no-check-certificate https://bootstrap.pypa.io/get-pip.py  
python3 get-pip.py --user
```

Installing uv
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Create and activate a virtual environment
```bash
uv venv
Using CPython 3.12.3 interpreter at: /usr/bin/python
Creating virtual environment at: .venv
Activate with: source .venv/bin/activate
source .venv/bin/activate
```

This will create a .venv folder inside your project and activate it.
Install dependencies from requirements.txt
(flaskApp0) 
```
$ uv pip install -r requirements.txt
Resolved 8 packages in 622ms
Prepared 7 packages in 305ms
Installed 8 packages in 16ms
 + click==8.3.0
 + flask==2.2.2
 + gunicorn==20.1.0
 + itsdangerous==2.2.0
 + jinja2==3.1.6
 + markupsafe==3.0.3
 + setuptools==80.9.0
 + werkzeug==2.2.2
```