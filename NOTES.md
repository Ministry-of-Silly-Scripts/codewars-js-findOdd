# Notes

## Description

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
Examples

`[7]` should return 7, because it occurs 1 time (which is odd).
`[0]` should return 0, because it occurs 1 time (which is odd).
`[1,1,2]` should return 2, because it occurs 1 time (which is odd).
`[0,1,0,1,0]` should return 0, because it occurs 3 times (which is odd).
`[1,2,2,3,3,3,4,3,3,3,2,2,1]` should return 4, because it appears 1 time (which is odd).

## Domain

- array of integers
- find one
- appears an odd number of times
- always be only one integer

## Rules

## Backlog

- Handle arrays of size 1
- Handle arrays of size 2
- Use a dictionary to track Occurrences

## Legend

- 🟩 TODO
- 🚧 IN PROGRESS
- ✅ DONE
- ❌ ERROR


### Pomodoro 1 🍅:

- initial setup
  - update README ✅
  - update NOTES ✅
  - update package.json ✅
  - update code/test files ✅
- domain description ✅
- backlog
- perform the 'canary' test just to check if the structure works ✅
- it should return 0 for input equal to [0] ✅
- it should return 7 for input equal to [7] ✅

### Pomodoro 2 🍅:

- it should return 1 for input equal to [1, 2] ✅
- it should return 2 for input equal to [2, 1] ✅
- it should return 1 for input equal to [1, 1, 2] ✅
  - deleted test for arrays with length 2 since they do not make sense for the problem
- it should return 4 for input equal to [1,2,2,3,3,3,4,3,3,3,2,2,1] ✅
