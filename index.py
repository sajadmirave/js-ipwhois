# get  arg .js file
import sys

# Detect the technology used by a website
import socket
from ipwhois import IPWhois
from pprint import pprint

# get value from js file
site = sys.argv[1]


# ip whois
# information about server
ip = socket.gethostbyname(site)
server = IPWhois(ip)
server = server.lookup_whois()
# ---------------

# log data
pprint(server)
