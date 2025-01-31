// create three buckets where two types of ball can be enter the bucket can hold max 10 balls in eachbucket now the number of red balls and white balls in each bucket is decided by user you have two find the total number of red balls in all three buckets 


class Bucket{
    constructor(name , red , white){
        this.bucketName = name
        this.redBallsCount  = red,
        this.whiteBallsCount  = white
    }
    totalCount(...reds){
        console.log("Total Numbers of red balls " + reds.reduce((acc , curr) => acc+curr));
        
    }
}

const bucket1 = new Bucket("bucket1" , 4 , 5)
const bucket2 = new Bucket("bucket2" , 3 , 5)
const bucket3 = new Bucket("bucket3" , 7 , 3)

bucket1.totalCount(bucket1.redBallsCount , bucket2.redBallsCount , bucket3.redBallsCount )
