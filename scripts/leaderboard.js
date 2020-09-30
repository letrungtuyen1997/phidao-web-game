var leaderboard_name = "TOPDIEM";

function ReportScore(score)
{
  FBInstant
    .getLeaderboardAsync(leaderboard_name)
    .then(function(leaderboard){
      return leaderboard.setScoreAsync(score);
    });
}
function LoadLeaderboard(callback)
{
  console.log('load leaderboard');
  FBInstant
    .getLeaderboardAsync(leaderboard_name)
    .then(function(leaderboard){
          leaderboard.getEntriesAsync(100, 0)
          .then(function(entries){
              var players = entries.map(function(player){
                return {
                  rank: player.getRank(),
                  id: player.getPlayer().getID(),
                  name: player.getPlayer().getName(),
                  photo: player.getPlayer().getPhoto(),
                  money:player.getScore(),
                }
              });
                if (callback!=null)
                  callback(JSON.stringify(players));
           });
    });
}

function LoadLeaderboardFriend(callback)
{
    console.log("LoadLeaderboard friend start!");
    FBInstant
    .getLeaderboardAsync(leaderboard_name)
    .then(function(leaderboard){
          leaderboard.getConnectedPlayerEntriesAsync(100, 0)
          .then(function(entries){
              var players = entries.map(function(player){
                return {
                  rank: player.getRank(),
                  id: player.getPlayer().getID(),
                  name: player.getPlayer().getName(),
                  photo: player.getPlayer().getPhoto(),
                  money:player.getScore(),
                }
              });
                if (callback!=null)
                  callback(JSON.stringify(players));
           });
    });
}
function LoadMyLeaderboard(callback)
{
  console.log('load my leaderboard');
  FBInstant
    .getLeaderboardAsync(leaderboard_name)
    .then(function(leaderboard){
          leaderboard.getPlayerEntryAsync()
          .then(function(player){
            var data={
                  rank: player.getRank(),
                  id: player.getPlayer().getID(),
                  name: player.getPlayer().getName(),
                  photo: player.getPlayer().getPhoto(),
                  money:player.getScore()
            };
              if (callback!=null)
                callback(JSON.stringify(data));
           });
    });
}