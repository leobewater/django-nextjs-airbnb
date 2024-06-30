FROM python:3.12.2-slim-bullseye

WORKDIR /usr/src/djangobnb_backend

# prevent python from creating the pyc files
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y netcat

RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . .