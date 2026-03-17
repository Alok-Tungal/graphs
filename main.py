import streamlit as st
import streamlit.components.v1 as components

st.set_page_config(layout="wide")

st.title("AI Startup Evaluation Radar Dashboard")

# read html file
with open("index.html", "r", encoding="utf-8") as f:
    html_file = f.read()

components.html(html_file, height=800, scrolling=True)
