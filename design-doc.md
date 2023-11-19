# Bug Tracker

*Last updated: 18/11/2023*

## Description

Bug tracker is a web application that allow users to report bugs encountered from various product applications. These reports are consolidated into a single view for developers to quickly review and prioritize bug fixes.

## Motivation

QA engineers and users are using messaging tools to report encountered bugs, ux issues and feature requests. These reports are consolidated manually in an infrequent basis into a word document which is tedious and time-consuming.

## Technologies used

TODO

## System Design

The following section discusses the initial system design for Bug Tracker.

### Use Cases & Assumptions

- The application is used in an offline environment
- Authentication/authorization services are handled externally
- A user can create reports of various types (eg. bug report, UX issue, feature request) for all products
- A user can attach media (videos/images) to a report
- A reporter should be able to view previously submitted reports
- A developer should be able to view all user submitted reports for products within permission scope

### Requirements

- The system should have high availability and low lactency
- Images and videos attached to reports should be held in a persistent storage
- Fixed/Closed reports should be deleted after a set expiration date. Media attached to the report should be deleted as well
- There should be some gamification features to encourage users to submit reports

### Data Models

![entity relationship diagram](./assets/data-model.jpg)

#### Report (~2.754KB)

|Key | Field | Type |  Max field Size | Explanation |Required |
|--- | ------| -----| -------- | -------------- | ----------- |
| PK | id | string |  64 | id of document | Yes |
|| type | string | 16 | set of report type. Set to one of the following types: `bug`, `ux_issue`, `feature_request`, `others` | Yes
|| title | string | 64 | user input; title of the report | Yes |
|| description | string | 512 | user input description of the report. Supports rich text for indentations, bullet points etc | Yes |
| FK | media_ids | string[] | 64[] | stores references to videos/images attached to the report | No |
|| external_link | string | 256 | optional URL string to link to external tools such as Jira/Gitlab etc | No |
|| status | string | 16 | set of report statuses. Set to one of the following statuses: `submitted`, `triaged`, `fixed`, `closed`, `fixing` | Yes |
|| created_date | string | 32 | report created datetime stored in ISO format | Yes |
|| fixed_date | string | 32 | datetime in ISO format; set when status is changed to `fixed`. Used for analytical purposes how see how long it takes to fix an issue| No |
|| expiration_date | string | 32 | datetime in ISO format; set when status is changed to `closed`. When a report is past this expiration date, this document is deleted from the database | No |
|FK| comment_ids | string[] | 64[]| Stores references to developer input comments | No |
|| reporter | string | 32 | username of the user that created the report | Yes |
|| assignee | string | 32 | username of the developer who is responsible for the report. Used for leaderboard purposes | No |
|| actions | string[] | 256[] | used to analytical purposes to track user/developer actions. e.g. report edits, developer assignment   | No |
|| is_public | boolean || privacy status of the report. Public reports are shown to all users of the application. Defaults to `false` | Yes |

#### Comment (~0.386KB)

|Key | Field | Type |  Max field Size | Explanation |Required |
|--- | ------| -----| -------- | -------------- | ----------- |
| PK | id | string | 64 | id of the document | Yes |
|| author | string | 32 | username of the comment author | Yes |
|| created_date | string | 32 | datetime in ISO string, comment date | Yes |
|| text | string | 256 | comment | Yes |
|| is_edited | boolean || sets to `true` if the `text` field is edited. Defaults to `false` | Yes |

#### Media (~0.344KB)

|Key | Field | Type |  Max field Size | Explanation |Required |
|--- | ------| -----| -------- | -------------- | ----------- |
|PK| id | string | 64 | id of the document | Yes |
|| file_name | string | 64 | name of the media file, user input | Yes
|| media_type | string | 16 | Type of the media, either `video` or `image` | Yes |
|| upload_date | string | 32 | datetime in ISO string, when the media is uploaded | Yes |
|| src_path | string | 128 | directory where this media is stored | Yes |
|| height | int || height of the media | Yes |
|| width | int || width of the media | Yes |
|| expiration_date | string | 32 | datetime in ISO format; set when status of the report is changed to `closed`. When the media is past this expiration date, this document is deleted from the database | No |

### Users & Traffic Estimates

- Assuming 10 monthly active users
- Assuming each user will submit an average of 1 report per month
- Assuming 25% of submitted reports to be accompanied by 1 video and 50% of submitted reports to be accompanied by ~3 images

### Storage Requirements

- Assuming each video is 1920x1080 and ~10seconds, it should be 1mb per submitted video. Each image should be 50KB
- Each month, (10 users x 1 report x (0.25 x 1MB)) + (10 users x 1 report x (0.5 x 0.05MB)) = 2.5MB + 0.25MB = **2.75MB of media storage per month**
- Assuming each report has 3 comments, each report will take up: 2.754KB + (3 x 0.386KB) = 3.912KB
- Each month, with an average of 10 reports with the accompanied media, (10 reports x 25% x 1 video x 0.344KB) + (10 reports x 50% x 3 images x 0.344KB) = **6.02KB of document storage per month**
- Total space needed per month: **2.756MB / month**
- Total space needed per year: 2.756MB x 12 = **~33MB / year**

## Modules

### Gamification

TODO

### Report clean-up

TODO