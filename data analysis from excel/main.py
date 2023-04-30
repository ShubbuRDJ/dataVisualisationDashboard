import pandas as pd
from pandas_profiling import ProfileReport
#   reading the csv file 
dataFrame = pd.read_csv('csvData.csv')

print(dataFrame);

# to generate the report 
profile = ProfileReport(dataFrame);
profile.to_file(output_file="dataVisual.html")