This function is a solution the problem at https://bitbucket.org/dbuy/workspace/snippets/rnB4an
developed by Jacob Anderson on 2/11/2020

Since this data is hierarchcial, my approach is to create a hash array to group data
with the same parents, then write a recursive function to push child data only after
it's parents have been added. 

I chose this method, because even though the initial JSON data may have 10,000+ objects,
my assumption is that the number of categories (parent-child relationships), could be
much, much less and therefore reduce the recursive calls. 

this repository is located at:
https://github.com/jande48/CSC_generation

Jacob Anderson
jacob.anderson10@gmail.com
337 417 1529
Resume: https://www.dropbox.com/s/7hlose7braznvzs/Resume_Jacob_Anderson_Dev.docx?dl=0
https://github.com/jande48/
https://www.linkedin.com/in/jacob-anderson-dev/
