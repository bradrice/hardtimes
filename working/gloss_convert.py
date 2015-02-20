import re
f = open("glossary.txt", "r")
pattern = re.compile(r"^([^:]*): (.*)")
sw_array = []
for index, line in enumerate(f): 
	# print(index)
	o = pattern.search(line)
	if o:
		item = {}
		itemarray = []
		rawterm = o.group(1)
		term = re.sub(r'^(.*)(\()(.*)(\))', r'\1\\\2\3\\\4', rawterm)
		# print term
		definition = o.group(2)
		item['def'] = definition
		item['term'] = term
	sw_array.append(item)
print sw_array

# for coord in c_array:
# 	print(coord)
