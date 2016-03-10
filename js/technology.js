$(function() {
    var displayTechnology = function (technologyName, description) {
        return $('<div class="text-margin"></div>').html(technologyName);
    }

    function displayAvoids() {
        var developmentToolsAvoid = ["Eclipse", "SVN", "Ant", "Maven", "Ansible"];
        developmentToolsAvoid.forEach(function (value) {
            $("#avoid-dt").append(displayTechnology(value));
        });
        var languagesPlatformsAvoid = ["Bash", "Perl", "Clojure", "Abap", "Coffeescript", "Flex", "XML", "PHP", "Google App Engine"];
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
        var developmentToolsEvaluate = ["Puppet", "Powershell", "Windows DSC", "Power BI", "GoCD"];
        developmentToolsEvaluate.forEach(function (value) {
            $("#evaluate-dt").append(displayTechnology(value));
        });
        var languagesPlatformsEvaluate = ["C#", "Scala", "Python", "R", "Ruby", "AWS", "Druid"];
        languagesPlatformsEvaluate.forEach(function (value) {
            $("#evaluate-lp").append(displayTechnology(value));
        });
        var frameworksLibrariesEvaluate = ["ASP.net", "Spark", "Cucumber", "Gatling", "Node.js"];
        frameworksLibrariesEvaluate.forEach(function (value) {
            $("#evaluate-fl").append(displayTechnology(value));
        });
        var databaseMessageBusEvaluate = ["SqlServer", "Kafka", "Greenplum", "Cassandra", "Titan"];
        databaseMessageBusEvaluate.forEach(function (value) {
            $("#evaluate-dm").append(displayTechnology(value));
        });
    }

    function displayAdopts() {
        var developmentToolsAdopt = ["IntelliJ", "Git", "Jenkins", "Nexus", "Chef", "Gradle"];
        developmentToolsAdopt.forEach(function (value) {
            $("#adopt-dt").append(displayTechnology(value));
        });
        var languagesPlatformsAdopt = ["Java", "Groovy", "Javascript", "HTML5", "Json", "Azure", "Apache", "Github"];
        languagesPlatformsAdopt.forEach(function (value) {
            $("#adopt-lp").append(displayTechnology(value));
        });
        var frameworksLibrariesAdopt = ["Spring", "Jersey/Jackson", "Logback", "Junit", "JQuery", "Bootstrap"];
        frameworksLibrariesAdopt.forEach(function (value) {
            $("#adopt-fl").append(displayTechnology(value));
        });
        var databaseMessageBusAdopt = ["Postgres", "Redis", "HDFS", "ActiveMQ"];
        databaseMessageBusAdopt.forEach(function (value) {
            $("#adopt-dm").append(displayTechnology(value));
        });
    }

    displayAvoids();
    displayEvaluates();
    displayAdopts();
});