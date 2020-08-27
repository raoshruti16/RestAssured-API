$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createUser.feature");
formatter.feature({
  "line": 2,
  "name": "Test the Create User",
  "description": "",
  "id": "test-the-create-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Test created user",
  "description": "",
  "id": "test-the-create-user;test-created-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the api is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I create a new user \u003cname\u003e and \u003cjob\u003e and verify its status code and other details",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "test-the-create-user;test-created-user;",
  "rows": [
    {
      "cells": [
        "name",
        "job"
      ],
      "line": 9,
      "id": "test-the-create-user;test-created-user;;1"
    },
    {
      "cells": [
        "Shruti",
        "Engineer"
      ],
      "line": 10,
      "id": "test-the-create-user;test-created-user;;2"
    },
    {
      "cells": [
        "Shreya002",
        "Student02"
      ],
      "line": 11,
      "id": "test-the-create-user;test-created-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Test created user",
  "description": "",
  "id": "test-the-create-user;test-created-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the api is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I create a new user Shruti and Engineer and verify its status code and other details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ListUser.the_api_is_up_and_running()"
});
formatter.result({
  "duration": 3516172100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shruti",
      "offset": 20
    },
    {
      "val": "Engineer",
      "offset": 31
    }
  ],
  "location": "CreateUser.I_create_a_new_user_and_verify_its_status_code(String,String)"
});
formatter.result({
  "duration": 2120532401,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Test created user",
  "description": "",
  "id": "test-the-create-user;test-created-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the api is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I create a new user Shreya002 and Student02 and verify its status code and other details",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ListUser.the_api_is_up_and_running()"
});
formatter.result({
  "duration": 619101401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shreya002",
      "offset": 20
    },
    {
      "val": "Student02",
      "offset": 34
    }
  ],
  "location": "CreateUser.I_create_a_new_user_and_verify_its_status_code(String,String)"
});
formatter.result({
  "duration": 752190400,
  "status": "passed"
});
formatter.uri("deleteUser.feature");
formatter.feature({
  "line": 2,
  "name": "Test the Update User",
  "description": "",
  "id": "test-the-update-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Test updated user",
  "description": "",
  "id": "test-the-update-user;test-updated-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the api is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I delete a given user \u003cid\u003e and verify its status code and other details",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "test-the-update-user;test-updated-user;",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 9,
      "id": "test-the-update-user;test-updated-user;;1"
    },
    {
      "cells": [
        "2"
      ],
      "line": 10,
      "id": "test-the-update-user;test-updated-user;;2"
    },
    {
      "cells": [
        "10"
      ],
      "line": 11,
      "id": "test-the-update-user;test-updated-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Test updated user",
  "description": "",
  "id": "test-the-update-user;test-updated-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the api is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I delete a given user 2 and verify its status code and other details",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ListUser.the_api_is_up_and_running()"
});
formatter.result({
  "duration": 593944000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    }
  ],
  "location": "DeleteUser.I_delete_a_given_user_and_verify_its_status_code(int)"
});
formatter.result({
  "duration": 681322800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Test updated user",
  "description": "",
  "id": "test-the-update-user;test-updated-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the api is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I delete a given user 10 and verify its status code and other details",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ListUser.the_api_is_up_and_running()"
});
formatter.result({
  "duration": 743584799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 22
    }
  ],
  "location": "DeleteUser.I_delete_a_given_user_and_verify_its_status_code(int)"
});
formatter.result({
  "duration": 692974700,
  "status": "passed"
});
formatter.uri("detailsSingleUser.feature");
formatter.feature({
  "line": 2,
  "name": "Test the Single User Details",
  "description": "",
  "id": "test-the-single-user-details",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test User Details",
  "description": "",
  "id": "test-the-single-user-details;test-user-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the api is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I check if \u003cname\u003e is present",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I get the details of the \u003cname\u003e user",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "test-the-single-user-details;test-user-details;",
  "rows": [
    {
      "cells": [
        "name"
      ],
      "line": 9,
      "id": "test-the-single-user-details;test-user-details;;1"
    },
    {
      "cells": [
        "Michael"
      ],
      "line": 10,
      "id": "test-the-single-user-details;test-user-details;;2"
    },
    {
      "cells": [
        "Tobias"
      ],
      "line": 11,
      "id": "test-the-single-user-details;test-user-details;;3"
    },
    {
      "cells": [
        "Eve"
      ],
      "line": 12,
      "id": "test-the-single-user-details;test-user-details;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Test User Details",
  "description": "",
  "id": "test-the-single-user-details;test-user-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "the api is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I check if Michael is present",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I get the details of the Michael user",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ListUser.the_api_is_up_and_running()"
});
formatter.result({
  "duration": 702146900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Michael",
      "offset": 11
    }
  ],
  "location": "DetailsSingleUser.I_check_if_name_is_present(String)"
});
formatter.result({
  "duration": 800544400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Michael",
      "offset": 25
    }
  ],
  "location": "DetailsSingleUser.I_get_the_details_of_the_name(String)"
});
formatter.result({
  "duration": 2500800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Test User Details",
  "description": "",
  "id": "test-the-single-user-details;test-user-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "the api is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I check if Tobias is present",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I get the details of the Tobias user",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ListUser.the_api_is_up_and_running()"
});
formatter.result({
  "duration": 593757801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tobias",
      "offset": 11
    }
  ],
  "location": "DetailsSingleUser.I_check_if_name_is_present(String)"
});
formatter.result({
  "duration": 629083799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tobias",
      "offset": 25
    }
  ],
  "location": "DetailsSingleUser.I_get_the_details_of_the_name(String)"
});
formatter.result({
  "duration": 2533699,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test User Details",
  "description": "",
  "id": "test-the-single-user-details;test-user-details;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "the api is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I check if Eve is present",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I get the details of the Eve user",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ListUser.the_api_is_up_and_running()"
});
formatter.result({
  "duration": 626820200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Eve",
      "offset": 11
    }
  ],
  "location": "DetailsSingleUser.I_check_if_name_is_present(String)"
});
formatter.result({
  "duration": 591348500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Eve",
      "offset": 25
    }
  ],
  "location": "DetailsSingleUser.I_get_the_details_of_the_name(String)"
});
formatter.result({
  "duration": 1107200,
  "status": "passed"
});
formatter.uri("listUser.feature");
formatter.feature({
  "line": 2,
  "name": "Test the User count",
  "description": "",
  "id": "test-the-user-count",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Test the number of users",
  "description": "",
  "id": "test-the-user-count;test-the-number-of-users",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the api is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I count the number of users",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I verify the number of users",
  "keyword": "Then "
});
formatter.match({
  "location": "ListUser.the_api_is_up_and_running()"
});
formatter.result({
  "duration": 1783351901,
  "status": "passed"
});
formatter.match({
  "location": "ListUser.I_count_the_number_of_users()"
});
formatter.result({
  "duration": 209599,
  "status": "passed"
});
formatter.match({
  "location": "ListUser.I_verify_the_number_of_users()"
});
formatter.result({
  "duration": 29600,
  "status": "passed"
});
formatter.uri("updateUser.feature");
formatter.feature({
  "line": 2,
  "name": "Test the Update User",
  "description": "",
  "id": "test-the-update-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Test updated user",
  "description": "",
  "id": "test-the-update-user;test-updated-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "the api is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I update a given user \u003cid\u003e with \u003cnewName\u003e and \u003cnewJob\u003e and verify its status code and other details",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "test-the-update-user;test-updated-user;",
  "rows": [
    {
      "cells": [
        "id",
        "newName",
        "newJob"
      ],
      "line": 9,
      "id": "test-the-update-user;test-updated-user;;1"
    },
    {
      "cells": [
        "2",
        "Shruti",
        "Engineer"
      ],
      "line": 10,
      "id": "test-the-update-user;test-updated-user;;2"
    },
    {
      "cells": [
        "11",
        "Shreya",
        "Student"
      ],
      "line": 11,
      "id": "test-the-update-user;test-updated-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Test updated user",
  "description": "",
  "id": "test-the-update-user;test-updated-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the api is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I update a given user 2 with Shruti and Engineer and verify its status code and other details",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ListUser.the_api_is_up_and_running()"
});
formatter.result({
  "duration": 773060299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 22
    },
    {
      "val": "Shruti",
      "offset": 29
    },
    {
      "val": "Engineer",
      "offset": 40
    }
  ],
  "location": "UpdateUser.I_update_a_given_user_and_verify_its_status_code(int,String,String)"
});
formatter.result({
  "duration": 2737147899,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Test updated user",
  "description": "",
  "id": "test-the-update-user;test-updated-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the api is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I update a given user 11 with Shreya and Student and verify its status code and other details",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ListUser.the_api_is_up_and_running()"
});
matter.result({
  "duration": 617581799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 22
    },
    {
      "val": "Shreya",
      "offset": 30
    },
    {
      "val": "Student",
      "offset": 41
    }
  ],
  "location": "UpdateUser.I_update_a_given_user_and_verify_its_status_code(int,String,String)"
});
formatter.result({
  "duration": 729814100,
  "status": "passed"
});
});