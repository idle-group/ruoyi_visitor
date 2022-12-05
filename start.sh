#!/bin/bash
python backend/manage.py runserver 0.0.0.0:8000 & > backend.log
cd web
npm run dev & >../web.log

