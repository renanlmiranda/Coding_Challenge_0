## Most frequent word 

- Given a string named “paragraph” and a list of strings named “forbidden words”, the most frequent word within the paragraph that is not in the forbidden words list should be returned.
- Only one word should return and this word can’t be a forbidden word. The words within the paragraph are not case sensitive and the answer must be in lower case.

#### Example # 1:
- Input: paragraph = “Bob hit a ball, the hit BALL flew long after it was hit.“, forbiddenWords = [“hit”]
- Output: “ball”

##### Explanation:
- “hit” shows up 3 times, but it's a forbidden word.
- “ball” shows up 2 times (and it's the only word that shows up 2 times), therefore this is the most frequent word.
- Have in mind that the words in the paragraph don’t distinguish upper case from lower case and the accentuation is ignored.
- For example, “ball” and “BALL” are the same word.

#### Example # 2:
- Input: paragraph = “a.“, forbiddenWords = []
- Output: “a”

##### Constraints:
- 1 <= paragraph.length <= 1000
- The paragraph has alphabet letters, spaces and these special symbols: “!?’,;.”
- 0 <= forbiddenWords.length <= 100
- 1 <= forbiddenWords[i].length <= 10
- forbiddenWords[i] is a list of words in lower case that contain only alphabet letters (a-z)

## More profitable operation
- As part of our car buying and selling process, we often have a forecast of potential car prices. A good use of this forecast is to take advantage of the moment when the price of a car is low to buy it and then take advantage of the moment when that price is higher to sell it.
- Let's say we have a string with N integer prices separated by a comma, where each price P (i) represents the value of a car on day i. If we are only allowed to do one buy trade and one sell trade, then design an algorithm that finds the highest possible profit given the sequence of prices over time.
**_Note: You should be aware that you cannot sell a car before you buy it._** 

##### Example # 1:
Input: “7,1,5,3,6,4”
Output: 5
Explanation: We buy on day 2 at $1 and sell on day 5 at $6 with a profit of $5.

##### Example # 2:
Input: “7,6,4,3,1"
Output: 0
Explanation:
In this case, it is not recommended to buy the car because clearly it’s worth less each day and we will never profit from it.