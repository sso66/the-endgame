## JavaScript Multidimensional Array
- An Array is a single line item "Sequence" JavaScript Object Model. It is used to:
    1. declare
    2. define
    3. access
    4. add
    5. insert
    6. calculate
    7. remove
    8. iterate

- To *declare* an empty multidimensional array, you use the same syntax as declaring one-dimensional array:
    >
        `let activities = [];`

- To *define* a two-dimensional array named `activities`:
    ```
    let activities = [
        ['Work', 9],
        ['Eat', 1],
        ['Commute', 2]
        ['Play Game', 1],
        ['Sleep', 7]
    ];
    ```
    > In the `activities` array, the first element represents the activity (space) and the second one shows the number of hours (time) spent per day each.
    >
- To *display* (print or show or render) the `activities` array in the console, you use the `console.table()` method as follows:
    ```
    console.table(activities);
    ```  
    > Here is the output:

    | (index) |   0   | 1 |
    |---------|-------|---|
    | 0 | 'Work' | 9 |
    | 1 | 'Eat' | 1 |
    | 2 | 'Commute' | 2 |
    | 3 | 'Play Game' | 1 |
    | 4 | 'Sleep' | 7 |
    > Note that (index) column is for the illustration that indicates the indices of the inner array.
- To *access* an element of the multidimensional arrary, yo first use the square backets to access an element of the **outer** array that return an **inner** array and then use another square bracket to access the element of the **inner** array.

    > The following example returns the second element of the first **inner** array in the `activities` array above.
    ```
    console.log(activities[0][1]); // 9
    ```
- To *add*, you can use Array (unsafe) methods such as `push()` and `splice()` to manipulate elements of a multidimension array.
    > For example to add a new element to the end of the multidimensional array, use the `push()` (unsafe) method as follows:
        ```
        activities.push(['Study', 2]);

        console.table(activities);
        ```
    > Here is the output:

    | (index) |   0   | 1 |
    |---------|-------|---|
    | 0 | 'Work' | 9 |
    | 1 | 'Eat' | 1 |
    | 2 | 'Commute' | 2 |
    | 3 | 'Play Game' | 1 |
    | 4 | 'Sleep' | 7 |
    | 5 | *'Study'* | 2 |

- To *insert* an element in the middle of the array, you use the `splice()` (unsafe) method.
    > The following inserts an element in the second position of the `activities` array.
    ```
    activities.splice(1, 0, ['Programming'], 2)
    ```
    > Here is the output:

    | (index) |   0   | 1 |
    |---------|-------|---|
    | 0 | 'Work' | 9 |
    | 1 | *'Programming'* | 2 |
    | 2 | 'Eat' | 1 |
    | 3 | 'Commute' | 2 |
    | 4 | 'Play Game' | 1 |
    | 5 | 'Sleep' | 7 |
    | 6 | 'Study' | 2 |

- To *calculate* the percentage of the hours spent on each activity and appends the percentage to the **inner** array:

    ```
    activities.forEach(activity => {
        let percentage = ((activity[1]  24 * 100).toFixed();
        activity[2] = percentage + '%';
    });

    console.table(activities);
    ```
    > Here is the output:

    | (index) |   0   | 1     |     2   |
    |---------|-------|-------|---------|
    | 0 | 'Work' | 9 | '30%' |
    | 1 | *'Programming'* | 2 | '8%' | 
    | 2 | 'Eat' | 1 | '4%' |
    | 3 | 'Commute' | 2 | '8%' |
    | 4 | 'Play Game' | 1 | '4%' |
    | 5 | 'Sleep' | 7 | '20%' |
    | 6 | 'Study' | 2 | '8%' |

- To *remove* an element from an array, you use `pop()` or `splice()` (unsafe) method.
    > The following statement removes the last element of the `activities` array.

    ```
    activities.pop();
    ```

    > Here is the output:

    | (index) |   0   | 1     |     2   |
    |---------|-------|-------|---------|
    | 0 | 'Work' | 9 | '30%' |
    | 1 | *'Programming'* | 2 | '8%' | 
    | 2 | 'Eat' | 1 | '4%' |
    | 3 | 'Commute' | 2 | '8%' |
    | 4 | 'Play Game' | 1 | '4%' |
    | 5 | 'Sleep' | 7 | '20%' |
    |         |       |       |         |

    > Similarly, you can remove the elements from **inner** array of the multidimensional array by using `pop()` (unsafe) method. 

    ``` 
    activities.forEach((activity) => {
        activity.pop(2); // remove all percentage elements from the 3rd column
    }); 
    ```
    > The following example removes the percentage elements from the **inner** arrays of the `activities` array.
    
    | (index) |   0   | 1 |
    |---------|-------|---|
    | 0 | 'Work' | 9 |
    | 1 | *'Programming'* | 2 |
    | 2 | 'Eat' | 1 |
    | 3 | 'Commute' | 2 |
    | 4 | 'Play Game' | 1 |
    | 5 | 'Sleep' | 7 |

- To *iterate* over a multidimensional array, you use a nested **for** loop as in the following example.

    ```
    // loop the outer array
    for (let i = 0; i < activities.lenght; i++) {
        // get the size of the inner array
        const innerArrayLength = activities[i].length;
        // loop the inner array
        for (let j = 0; j < innerArrayLength; j++) {
            console.log('[' + i + ',' + j + '] = ' + activities[i][j]);
        }   
    }
    ```
    The first loop iterates over the elements of the **outer** array and the nested loop iterates over elements of the **inner** array.

    The following shows the output of the script in the console:

    ```
    [0,0] = Work
    [0,1] = 0
    [1,0] = Eat
    [1,1] = 1
    [2,0] = Commute
    [2,1] = 2
    [3,0] = Play Game
    [3,1] = 1
    [4,0] = Sleep
    [4,1] = 7
    [5,0] = Study
    [5,1] = 2
    ```

    Or you can use the `forEach()` method twice:
    
    ```
    activities.forEach((activity) => {
        activity.forEach((data) => {
            console.log(data);
        });
    });
    ```

    Output:

    ```
    Work
    0
    Eat
    1
    Commute
    2
    Play Game
    1
    Sleep
    7
    Study
    2
    ```

    In this tutorial, you have learned how to use an array to create a JavaScript multidimensional array.    
    
