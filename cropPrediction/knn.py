import numpy as np
import pandas as pd
from sklearn.neighbors import KNeighborsClassifier
from matplotlib import pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score as acc
from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay
import seaborn as sns
import pickle

loc = "Crop_recommendation.csv"
data  = pd.read_csv(loc)
print(data)

col = list(data.columns)
classes = data["label"].unique()

xdata = data.iloc[:, 0:7].values
ydata = data.iloc[:, 7].values

plt.figure(figsize = (16, 9))
plt.xticks(rotation=90)

all_col = data.columns[:-1]

for col in all_col:
#   plt.figure(figsize = (16, 9))
#   sns.barplot(x = 'label', y = col, data = data, palette = 'rocket')
#   plt.xlabel('label', fontsize = 12)
#   plt.ylabel(col, fontsize = 12)
#   plt.xticks(rotation=90)
#   plt.title(f'{col} vs Crop')
#   plt.show()

  xtrain, xtest, ytrain, ytest = train_test_split(xdata, ydata, test_size=0.2, random_state=884)
  x_st = StandardScaler()
  xtrain = x_st.fit_transform(xtrain)
  xtest = x_st.fit_transform(xtest)

  acc_list = []
  err_rate = []

  neighbors = np.linspace(1, 50, 50)
  neighbors = neighbors.astype(int)

  for K in neighbors:
      classifier = KNeighborsClassifier(n_neighbors=K)
      classifier.fit(xtrain, ytrain)
      y_pred = classifier.predict(xtest)

      accuracy = round(acc(ytest, y_pred) * 100, 3)

      acc_list.append(accuracy)
      err_rate.append(np.mean(y_pred != ytest))

K_opt = acc_list.index(max(acc_list))
print('\nOptimal value of K = ', K_opt)



classifier = KNeighborsClassifier(n_neighbors=K_opt + 1)
classifier.fit(xtrain, ytrain)
y_pred = classifier.predict(xtest)

accuracy = acc(ytest, y_pred) * 100
print('Accuracy of the training Model : ', round(accuracy, 3), '%')

cm = confusion_matrix(ytest, y_pred, normalize='pred')

# fig, ax = plt.subplots(figsize=(20, 13))
# sns.heatmap(cm, annot=True)
# plt.xlabel('Predicted Crop', fontsize=12)
# plt.ylabel('Actual Crop', fontsize=12)
# plt.title('Confusion Matrix', fontweight='bold', fontsize=15)

# plt.xticks(rotation=90)
# plt.yticks(rotation=0)

# ax.xaxis.set_ticklabels(classes)
# ax.yaxis.set_ticklabels(classes)
# plt.show()

from sklearn.metrics import classification_report
print(classification_report(ytest, y_pred))

# pickle.dump(classifier,open("model.pkl","wb"))

