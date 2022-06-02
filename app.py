#!/usr/bin/env python3

from flask import Flask
from flask import render_template
from flask import request
#import serial
from flask import Flask, redirect, url_for, request, Response

app = Flask(__name__)
# ser = serial.Serial('/dev/ttyACM0', 9600, timeout=1)
# ser.reset_input_buffer()



def sendToArduino(ser,req):
    ser.write(req.encode())
    line = ser.readline().decode('utf-8').rstrip()
    return line

# @app.route('/dashboard/<name>')
# def dashboard(name):
#    return 'welcome %s' % name

# @app.route('/login',methods = ['POST', 'GET'])
# def login():
#    if request.method == 'POST':
#       user = request.form['name']
#       #return redirect(url_for('dashboard',name = user))
#       global test
#       return "login post %s" % test
#    else:
#       user = request.args.get('name')
#       #return render_template('login.html')
#       return "login get %s" % test

@app.route('/<req>')
def send_arduino(req):
    # global ser
    # return "{%s: %s}" % (req,sendToArduino(ser,req))
    res = Response('{"value": "%s"}' % "12 C")
    res.headers['Access-Control-Allow-Origin'] = '*'
    return res



if __name__ == '__main__':
   app.run(debug = True)


