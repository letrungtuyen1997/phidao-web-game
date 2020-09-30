
  //social
  function getDataContext()
  {
      var data = FBInstant.getEntryPointData();
      return JSON.stringify(data);
  }

  function shareAsync(base64Picture,callback_success,callback_fail)
  {
    var txtContent = namePlayer+' đã khoe thành tích!';
    if (FBInstant.getLocale()=='en_US') txtContent = namePlayer+' has just shared his achievement!';

    var namePlayer = FBInstant.player.getName();
    var fbid = FBInstant.player.getID();
    FBInstant.shareAsync({
      intent: 'SHARE',
      image: base64Picture,
      text: txtContent,
      data: { myReplayData: 'abc' },
    }).then(function() {
        console.log('then');
        callback_success();
      }).catch(function(e){
        var data = JSON.stringify(e);
        console.log('catch '+data);
        callback_fail(data);
    });
  }
  function inviteAsync(callback_success,callback_fail)
  {
    FBInstant.context
      .chooseAsync()
      .then(function() {
        console.log('then');
        callback_success();
      }).catch(function(e){
        var data = JSON.stringify(e);
        console.log('catch '+data);
        callback_fail(data);
    });
  }

  function updateAsync(base64Picture,string_data,callback_success,callback_fail)
  {
    var namePlayer = FBInstant.player.getName();
    var data = JSON.parse(string_data);
    var score=data.score;
    var txtContent = namePlayer+" vừa đạt được "+score+" điểm, đến lượt bạn!";
    if (FBInstant.getLocale()=='en_US') txtContent = namePlayer+" has just achieved "+score+" points, it's your turn!";

    window.FBInstant.updateAsync(
      {
        action: "CUSTOM",
        cta: "Join The Fight",
        template: "join_fight",
        image: base64Picture, //this should be source data of your share picture in 
                              //base64! you can parse your picture to base64 use  
                              //'https://www.base64-image.de'
        text: txtContent,
        data,
        strategy: "IMMEDIATE",
        notification: "NO_PUSH"
      }).then(function() {
        console.log('then');
        callback_success();
      }).catch(function(e){
        var data = JSON.stringify(e);
        console.log('catch '+data);
        callback_fail(data);
    });
  }
  function chooseAsync(callback_success,callback_fail){
    FBInstant.context
      .chooseAsync({
        filters: ['NEW_CONTEXT_ONLY'],
        minSize: 3,
      }).then(function() {
        console.log('then');
        callback_success();
      }).catch(function(e){
        var data = JSON.stringify(e);
        console.log('catch '+data);
        callback_fail(data);
    });

  }