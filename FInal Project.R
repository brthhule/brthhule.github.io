library(RCPA3)
library(labelled)
library(dplyr)
library(modelsummary)  # model plot
library(countries)

####################################### Load in Data ###########################

############################# Nuclear Model Data

################### Fossil fuel consumption in Terawatt-hours (TWh) in 2022
#Load in the dataframe
fossil.fuels <- read.csv("C:/Users/Brennen/Desktop/School/FALL 2024/HGLO208/data/final_project/nuclear/fossil-fuel-consumption.csv")
# Remove rows with NA
fossil.fuels <- na.omit(fossil.fuels)
# Isolate the 2022 year; only want to look at one year
fossil.fuels <- fossil.fuels[fossil.fuels$Year == 2022, ]

################### GDP in 2022 (USD) (independent variable)
#Load in the dataframe
GDP <- read.csv("C:/Users/Brennen/Desktop/School/FALL 2024/HGLO208/data/final_project/nuclear/GDP.csv")
# Replace .. values with NA
GDP <-  GDP %>% mutate(X2022.GDP.USD = replace(X2022.GDP.USD, X2022.GDP.USD == "..", NA))
GDP$X2022.GDP.USD <- as.numeric(GDP$X2022.GDP.USD)
GDP$X2022.GDP.USD <- GDP$X2022.GDP.USD / 1000000

# Remove rows with NA values
GDP <- na.omit(GDP)

################### Life expectancy (independent variable)
# Load in the dataframe
life.expectancy <- read.csv("C:/Users/Brennen/Desktop/School/FALL 2024/HGLO208/data/final_project/nuclear/life-expectancy.csv")
# Remove rows with NA values
life.expectancy <- na.omit(life.expectancy)

################### General data frame for nuclear power capacities (including in use, under construction, announced, and more; only the Prospective vector is used) (dependent variable)
# Load in the dataframe
nuclear <- read.csv("C:/Users/Brennen/Desktop/School/FALL 2024/HGLO208/data/final_project/nuclear/nuclear-power-capacities")
# Substitute "," with "" because a lot of numbers have commas in them (messes with as.numeric if it isn't modified)
nuclear$Prospective <- gsub(",", "", nuclear$Prospective)
# Turn Prospective vector from strings to numeric values
nuclear$Prospective <- as.numeric(nuclear$Prospective)
# Remove rows with NA values
nuclear <- na.omit(nuclear)

# Merge the data for the Nuclear Model; use auto_merge
# All dataframes have a common column named "Country"
combined.nuclear <- auto_merge(GDP, life.expectancy, nuclear, fossil.fuels, by = "Country")
# Remove rows with NA values
combined.nuclear <- na.omit(combined.nuclear)

################### Merge the dataframes
# There is an outlier in the Prospective dataframe; take all data points below 30,000
less_than = combined.nuclear$Prospective < 30000
# Create a placeholder vector and fill it with NA's
combined.nuclear$prospective_data <- NA
# Add all values in Prospective that are below the threshold to the placeholder vector
combined.nuclear$prospective_data[less_than] <- combined.nuclear$Prospective[less_than]
# Remove less_than to clear up space in the global environment in R Studio
remove(less_than)

############################# Impact Model Data

################### Countries to be studied
countries <- c("Afghanistan", "Pakistan", "Iraq", "Yemen", "Libya", "Syria")

################### Per capita kilocalorie supply from all foods per day (independent variable)
# Load in the data
calorie.supply <- read.csv("C:/Users/Brennen/Desktop/School/FALL 2024/HGLO208/data/final_project/terrorism/calorie-supply.csv")
# Isolate the countries I want to study
calorie.supply <- calorie.supply[calorie.supply$Country %in% countries, ]
# Isolate year to 2021
calorie.supply <- calorie.supply[calorie.supply$Year == 2018, ]

################### Corruption Perception Index assessment in 2018 (dependent variable)
perception <- read.csv("C:/Users/Brennen/Desktop/School/FALL 2024/HGLO208/data/final_project/terrorism/corruption-perception-index.csv")
perception <- perception[perception$Country %in% countries, ]
perception <- perception[perception$Year == 2018, ]


################### Share of population with energy access in 2021 (independent variable)
access <- read.csv("C:/Users/Brennen/Desktop/School/FALL 2024/HGLO208/data/final_project/terrorism/electricity-access.csv")
access <- access[access$Country %in% countries, ]

access <- access[access$Year == 2018, ]

################### Gross Domestic Product in 2018 (USD)
terror.GDP <- read.csv("C:/Users/Brennen/Desktop/School/FALL 2024/HGLO208/data/final_project/terrorism/terror-GDP.csv")
# Divide by 1,000,000 to make GDP easier to handle
terror.GDP$GDP <- terror.GDP$GDP / 1000000

############################# Merge data frames
combined.impact <- auto_merge(calorie.supply, perception, access, terror.GDP, by = "Country")



####################################### Graphs and Models ######################

############################# Nuclear Model

histC(x=prospective_data, 
      data = combined.nuclear, 
      xlab = "Power Capacity in MW", 
      main = "Prospective Nuclear Power Capacity", 
      bar.col="mediumorchid1",
      breaks=50,
      plot = T) 

nuclear.model <- regC(Prospective~X2022.GDP.USD + Life.Expectancy + Fossil.fuels..TWh., data = combined.nuclear)

############################# Impact Model

histC(x=CPI, 
      data = combined.impact, 
      xlab = "Perception Value", 
      main = "Corruption Perception Index in 2018", 
      bar.col="mediumorchid1",
      breaks=4,
      plot = T) 

nuclear.model <- regC(CPI~Daily.Supply + Access.to.electricity....of.population. + GDP, data = combined.impact)
