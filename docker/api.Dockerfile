FROM python:3.8

ADD ./backend/requirements.txt /tmp

RUN pip install -r /tmp/requirements.txt

RUN mkdir /api

ADD ./backend/ /api

WORKDIR /api/src

CMD python main.py