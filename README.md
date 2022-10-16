# store-cart-frontend React App
Builded on MERN stack.


Now launched on aws by address http://3.228.71.220/

Works normally on PC version.

Use to redirect port.
iptables -A INPUT -i eth0 -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -i eth0 -p tcp --dport 8080 -j ACCEPT
iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080
