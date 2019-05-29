# nodejs-cli-osrs-toolkit
A toolkit for players of OSRS that runs in the CLI using node  
  
***Notice: This toolkit requires [nodejs](https://nodejs.org/en/) to be installed on your machine to run***.  
  
### Commands:  
__Base Script Call:__ ***`node ge-calc.js `***  
__Flags:__  
- ***`-s`*** 
    - __Required: ***Yes***__
    - __Type: ***String***__
    - __Desc:__ The item search term. The item name must  
    be spelled correctly for the serch to be successful.  
    If search was successful, you will get a printout of:  
    the Active GE Sell Price per Unit, the current High Alch  
    Value, and the High Alch Gain/Loss Value.
    - __Usage:__ ***`node ge-calc.js -s "gold ore"`***  
    - __Output:__  
      
    ![Search term only output](/screenshots/search-term-only-output.PNG "Search term only output")  
    
***  
  
- ***`-x`*** 
    - __Required: ***Optional***__
    - __Type: ***Integer***__
    - __Desc:__ The number of units of the searched item being  
    sold in GE. If search was successful, you will get a print out of:  
    the Profit to be made based on the Active GE Sell Price per Unit,  
    the Raw High Alch Profit based on the Number of Unts specified times  
    the High High Alch Value per unit, and the High Alch Gain/Loss  
    Value based on the Total GE Profit deducted from the Raw High Alch Profit.
    - __Usage:__ ***`node ge-calc.js -s "gold ore" -x 100`***  
    - __Output:__  
      
    ![Full search output](/screenshots/full-search-output.PNG "Full search output")  
        
***  
  
### Credits:  
  
***[Old School RuneScape](https://oldschool.runescape.com/) by Jagex***  
  
***The [osrs-wrapper](https://www.npmjs.com/package/osrs-wrapper) package by [atjeff](https://www.npmjs.com/~atjeff) on npmjs.org***
