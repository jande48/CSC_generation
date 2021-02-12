# CSC_generation

My solution to [this interview problem](https://bitbucket.org/dbuy/workspace/snippets/rnB4an).

[view on GitHub](https://github.com/jande48/CSC_generation)

## Reasoning
Since the taxonomy for categories can be arbitrarily deep, I chose a non-recursive approach that classifies each category as insertable or awaiting its parent's insertion and updates these running lists at every step of the iteration so that as soon as a parent is inserted, all the children that were waiting get inserted as well.

## Possible improvements
With the possibility of facing more than 10,000 categories, I would be tempted to implement a streaming version of this function that could take in a readable stream of JSON rather than a complete JSON object and start producing output quicker (except in the worst case), as the input is still being streamed in.

Another possible improvement to consider for even larger datasets would be to make a parallelizable version of this algorithm where more than one processor can help getting through that enormous list of categories, sharing the `inserted` and `waiting` temporary objects to achieve the desired result despite sharing the workload.

## Contact
**Jacob Anderson**
- [jacob.anderson10@gmail.com](mailto:jacob.anderson10@gmail.com)
- [337-417-1529](tel:3374171529)

## I'm looking for opportunities!
- [resume](https://www.dropbox.com/s/7hlose7braznvzs/Resume_Jacob_Anderson_Dev.docx?dl=0)
- [GitHub profile](https://github.com/jande48/)
- [LinkedIn profile](https://www.linkedin.com/in/jacob-anderson-dev/)
