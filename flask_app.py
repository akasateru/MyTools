from flask import Flask, url_for, redirect, render_template
from jinja2 import Template
import datetime
import csv
import itertools
import random
import time
import sys

app = Flask(__name__)

@app.route("/")
def hello_world():
  for i in range(20):
    return render_template("top.html",i=i)

@app.route('/count_down_timer')
def projects():
  today =  datetime.date.today()
  return render_template("count_down_timer.html",today=today)

if __name__ == "__main__":
  app.run(host="0.0.0.0", port=5000, debug=True)