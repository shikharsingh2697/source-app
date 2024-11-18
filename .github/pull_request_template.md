# Pull Request details

Please go the the `Preview` tab and select the appropriate sub-template if required:

* [TAI Template](?expand=1&template=tai.md)


## Ticket details

- Jira ticket related to it  [TTLA-XXXX] <!--- (just fill the XXXX, GitHub has a jira automation that will link with the right url) -->
- **Description**: On the ticket. <!--- needed if the ticket has no description -->


## PR details

### Dependencies:
If applicable, please fill these fields with all dependencies this PR may have. **Especially** when it depends on other repos PRs, as it can impact the deploy strategy

- Depends on:
    -  Pull request link: #issue-request-number  <!--- for more information, please visit https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/autolinked-references-and-urls -->

### Cross schema queries
Please bear in mind this checklist if the PR has any cross schema queries(even inside migrations and tasks).

- [ ] My pr have cross schema queries
- [ ] I checked [here](https://github.com/letsdeel/dbutils/blob/e2d1a267968f090d4a6c21ce2c31ac591d57babd/repeatables/R__service_permissions.sql#L817) if time tracking have permission to access **ALL** tables involved on the query.

### Before Merging
A small checklist of procedures that need to be done before merging the PR

- [ ] I am merging my PR with squash and merge - Required, except for deploys -
- [ ] I added tests for my changes or, when not possible, tested it manually on [giger](https://giger.training/admin/environments)
- [ ] My PR was submitted to QA - Required, especially when we have risk of side effects -

### Notes for reviewers:
None  <!--- needed if some particularities require extra atention of the reviwers -->
