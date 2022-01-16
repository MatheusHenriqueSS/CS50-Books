import os
import requests
import urllib.parse

from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp

app = Flask(__name__)

app.config["TEMPLATES_AUTO_RELOAD"] = True

def query_id(index):
    #faz a query na api90

    api_key = os.environ.get("API_KEY")
    url = f"https://www.googleapis.com/books/v1/volumes?q=id:{index}&key={api_key}"
    print(url)
    response = requests.get(url)
    print(response)
    quote = response.json()
    print(quote)

@app.route("/")
def index():
    return render_template("index.html", active_nav = "home")

@app.route("/search")
def search():
    return render_template("search.html", active_nav="search", start_button = "1")


@app.route("/info", methods=["GET", "POST"])
def info():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html", active_nav="about")

