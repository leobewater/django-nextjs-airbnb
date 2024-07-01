Video: https://www.youtube.com/watch?v=AnhKSBTWCWc&ab_channel=CodeWithStein

```
# frontend (next.js)
> npx create-next-app@latest
# set project name "djangobnb"

> npm i zustand

# backend (django)
> cd backend
> docker-compose up
# view site at http://localhost:8000/

# apply migrations
> docker-compose exec web python manage.py migrate
> docker-compose exec web python manage.py startapp useraccount
> py manage.py startapp property

# Clear Migration History with postgres shell
> docker-compose exec web python manage.py dbshell
DELETE FROM django_migrations WHERE app = 'useraccount';
DELETE FROM django_migrations WHERE app = 'account';

# Recreate Migrations
> docker-compose exec web python manage.py makemigrations useraccount
> docker-compose exec web python manage.py migrate

# Flush db
> docker-compose exec web python manage.py flush
> docker-compose exec web python manage.py showmigrations
```