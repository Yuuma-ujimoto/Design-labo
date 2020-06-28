import os

main_directory = os.getcwd()
ls = os.listdir(main_directory)
print(ls)
max_number = 0
for directory in ls:
	if directory.startswith("design"):
		split_directory = directory.split("-")
		print(split_directory)
		if split_directory[-1].startswith("no"):
			project_number = split_directory[-1]
			replaced_project_number = int(project_number.replace("no",""))
			print(replaced_project_number)
			if max_number < replaced_project_number:
				max_number = replaced_project_number

fill_num = 2
if max_number < 10:
	fill_num = 2
elif max_number < 100:
	fill_num = 3
new_project_number = str(max_number+1).zfill(fill_num)

dir_path = "design-test-no"+new_project_number
os.mkdir(dir_path)