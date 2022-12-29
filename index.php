<?php








?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="style.scss" />

    <title>Quizzy</title>
</head>

<body>
    <div class="quiz-container" id="quiz">
        <div class="quiz-header">
            <div class="timer">
                <div>
                    <span class="timer_sec">00:30</span>
                </div>
            </div>
            <h2 id="question">Question Text</h2>
            <ul>
                <li>
                    <input type="radio" name="answer" id="a" class="answer" />
                    <label for="a" id="a_text">Answer</label>
                </li>
                <li>
                    <input type="radio" name="answer" id="b" class="answer" />
                    <label for="b" id="b_text">Answer</label>
                </li>
                <li>
                    <input type="radio" name="answer" id="c" class="answer" />
                    <label for="c" id="c_text">Answer</label>
                </li>
                <li>
                    <input type="radio" name="answer" id="d" class="answer" />
                    <label for="d" id="d_text">Answer</label>
                </li>
            </ul>
        </div>
        <button id="submit">Submit</button>
    </div>
    <div class="awsanswers" id="awsanswers">
        <div class="thequest">
            <h2></h2>
        </div>
        <div class="theansw">
            <h3></h3>
        </div>
        <div class="justification">
            <h6></h6>
        </div>
    </div>
</body>

<script src="question.js"></script>
<script src="answer.js"></script>
<script src="script.js"></script>

</html>
</php>