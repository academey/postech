from socket import *
import sys, pdb
serverName = 'localhost'
serverPort = int(sys.argv[1])
clientSocket = socket(AF_INET, SOCK_STREAM)
breakpoint() # bp1
clientSocket.connect((serverName,serverPort))
sentence = input('Input lowercase sentence:')
breakpoint() # bp2
clientSocket.send(sentence.encode())
modifiedSentence = clientSocket.recv(1024)
print('From Server: ', modifiedSentence.decode())
breakpoint() # bp4 or bp5
clientSocket.close()