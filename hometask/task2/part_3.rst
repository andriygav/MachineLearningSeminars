####################
Домашнее задание 2. Блок 3.
####################

Описание
========

Задача 6. Генерация аннотации к изображению
-------------------------------------------
Требуется построить модель генерации описания изображения по изображению. В качестве выборки рассматривается подвыборка вывборки `COCO <https://cocodataset.org/#download>`_. Требуется в качестве модели encoder использовать предобученую модель resnet152 без последнего слоя (по аналогии с `16-м семинаром <https://github.com/andriygav/MachineLearningSeminars/blob/master/sem16/main.ipynb>`_), в качестве модели decoder обучить LSTM модель.

Все выводы должны быть представленны в формате tensorboard (показать, как менялись описания одного и того же изображения при обучении модели, а также график качества в зависимости от итерации).


P.S. Может быть полезным `код <https://github.com/yunjey/pytorch-tutorial/tree/master/tutorials/03-advanced/image_captioning>`_. 

P.S.S Рекомендуется взять подвыборку общей выборки из сайта COCO.

Задача 7. Детекция машинной генерации
----------------------------------------

Требуется построить базовый классификатор машинносгенерированных текстов. Современные методы генерации текстов позволяют генерировать тест, которые трудно отличимы от человеских текстов. В рамках данного задания предлагается реализовать простой метод детекции на базе моделей кодировщика трансформера. В качестве базовых статей предлагается использовать работы (реализовать любую из моделей классификации, указанных в данных работах):

- G.M. Gritsay, A. V. Grabovoy, A. S. Kildyakov, and Yu V. Chekhovich. Artificially generated text fragments search in academic documents. Doklady Mathematics, 2024.
- German Gritsay, Andrey Grabovoy, Alexander Kildyakov, and Yury Chekhovich. Automated text identification: Multilingual transformer-based models approach. In Proceedings of the Iberian Languages Evaluation Forum (IberLEF 2023) co-located with the Conference of the Spanish Society for Natural Language Processing (SEPLN 2023), volume 3496 of CEUR Workshop Proceedings, CEUR-WS.org, 2023.
- German Gritsay, Andrey Grabovoy, and Yury Chekhovich. Automatic detection of machine generated texts: Need more tokens. In Ivannikov Memorial Workshop Proceedings 2022, 2022.

Выборки для обучения и тестирования предлагается использовать с соревнования SemEval 2024 (https://github.com/mbzuai-nlp/SemEval2024-task8). В рамках конкурса рассматривались 3 типа задачи: бинарной классификации (machine vs human), мультиклассовой классификации (generative model classification), детекция машинносгенерированного фрагмента в тексте. Данные задачи идут в порядке увеличения сложности, предлагается решать именно как задачу бинарной классификации, но в целом можно решать любую из представленных 3х подзадач.

P.S. при проблемах с доступами к статьям, можно написать на почту за исходниками.

Задача 8. Рекомендательная система на основе матричного разложения
----------------------------------------

TBA