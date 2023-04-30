FROM python:3.10

EXPOSE 5000

WORKDIR /app

COPY requiremnts.txt .


RUN pip install  -r requiremnts.txt

COPY .  /app/

CMD [ "flask", "run" , "--host","0.0.0.0" ]