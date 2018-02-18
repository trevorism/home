$(function () {
    var displayTechnology = function (technologyName, description) {
        return $('<div class="text-margin"></div>').html(technologyName);
    }

    function displayAvoids() {
        var developmentToolsAvoid = ["Puppet", "Eclipse", "SVN", "Ant", "Maven", "Ansible"];
        developmentToolsAvoid.forEach(function (value) {
            $("#avoid-dt").append(displayTechnology(value));
        });
        var languagesPlatformsAvoid = ["Bash", "Perl", "Python", "Clojure", "Abap", "Coffeescript", "Flex", "XML", "PHP"];
        languagesPlatformsAvoid.forEach(function (value) {
            $("#avoid-lp").append(displayTechnology(value));
        });
        var frameworksLibrariesAvoid = ["Hibernate", "Grails", "Log4j", "Swing", "Struts", "JSF"];
        frameworksLibrariesAvoid.forEach(function (value) {
            $("#avoid-fl").append(displayTechnology(value));
        });
        var databaseMessageBusAvoid = ["Neo4j", "Mongo", "Oracle", "Websphere", "MySQL"];
        databaseMessageBusAvoid.forEach(function (value) {
            $("#avoid-dm").append(displayTechnology(value));
        });
    }

    function displayEvaluates() {
        var developmentToolsEvaluate = ["Visual Studio Code", "Power BI", "GoCD"];
        developmentToolsEvaluate.forEach(function (value) {
            $("#evaluate-dt").append(displayTechnology(value));
        });
        var languagesPlatformsEvaluate = ["C#", "Kotlin", "AWS", "Powershell 6"];
        languagesPlatformsEvaluate.forEach(function (value) {
            $("#evaluate-lp").append(displayTechnology(value));
        });
        var frameworksLibrariesEvaluate = ["Gatling", "Tensor Flow", "Azure ML", "Azure Data Lake Analytics"];
        frameworksLibrariesEvaluate.forEach(function (value) {
            $("#evaluate-fl").append(displayTechnology(value));
        });
        var databaseMessageBusEvaluate = ["Druid", "Titan", "Google BigTable/Spanner", "Azure Data Lake"];
        databaseMessageBusEvaluate.forEach(function (value) {
            $("#evaluate-dm").append(displayTechnology(value));
        });
    }

    function displayAdopts() {
        var developmentToolsAdopt = ["JetBrains IDEs", "Git", "Jenkins", "Nexus", "Gradle"];
        developmentToolsAdopt.forEach(function (value) {
            $("#adopt-dt").append(displayTechnology(value));
        });
        var languagesPlatformsAdopt = ["Groovy", "Javascript", "Json", "Azure", "Google Cloud", "Github"];
        languagesPlatformsAdopt.forEach(function (value) {
            $("#adopt-lp").append(displayTechnology(value));
        });
        var frameworksLibrariesAdopt = ["REST", "Cucumber", "OAuth2", "Node.js"];
        frameworksLibrariesAdopt.forEach(function (value) {
            $("#adopt-fl").append(displayTechnology(value));
        });
        var databaseMessageBusAdopt = ["Azure Cosmos", "Google Cloud Pub/Sub", "Google Datastore"];
        databaseMessageBusAdopt.forEach(function (value) {
            $("#adopt-dm").append(displayTechnology(value));
        });
    }

    displayAvoids();
    displayEvaluates();
    displayAdopts();
});