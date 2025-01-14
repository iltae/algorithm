function solution(friends, gifts) {
    const points = {}, giftCount = {}, receivedGift = {}, giftList = {};

    friends.forEach(friend => {
        points[friend] = 0;
        giftCount[friend] = 0;
        receivedGift[friend] = 0;
        giftList[friend] = [];
    });

    gifts.forEach(gift => {
        const [giver, receiver] = gift.split(" ");
        giftCount[giver] += 1;
        receivedGift[receiver] += 1;
        giftList[giver].push(receiver);
    });

    for (let friend of friends) {
        points[friend] = giftCount[friend] - receivedGift[friend];
    }

    const nextMonthGift = {};
    
    for (let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            const f1 = friends[i];
            const f2 = friends[j];

            const f1Gave = giftList[f1].filter(x => x === f2).length;
            const f2Gave = giftList[f2].filter(x => x === f1).length;

            if (f1Gave > f2Gave) {
                nextMonthGift[f1] = (nextMonthGift[f1] || 0) + 1;
            } else if (f2Gave > f1Gave) {
                nextMonthGift[f2] = (nextMonthGift[f2] || 0) + 1;
            } else {
                if (points[f1] > points[f2]) {
                    nextMonthGift[f1] = (nextMonthGift[f1] || 0) + 1;
                } else if (points[f2] > points[f1]) {
                    nextMonthGift[f2] = (nextMonthGift[f2] || 0) + 1;
                }
            }
        }
    }

    const maxGifts = Math.max(...Object.values(nextMonthGift), 0);
    return maxGifts;
}
