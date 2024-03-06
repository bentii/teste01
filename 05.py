def inverter(str):
    str_invertida = ''
    for i in range(len(str)-1, -1, -1):
        str_invertida += str[i]
    return print(str_invertida)

inverter('Python')
inverter('1234abcd')
inverter('Hello World')
inverter('D= metartnoc em rovaf roP')