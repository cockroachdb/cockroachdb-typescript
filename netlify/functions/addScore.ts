import { Handler } from '@netlify/functions'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

interface ScoreEntry {
  playerId: string,
  score: string
}

const handler: Handler = async (event, context) => {
  if(event.body) {
    const newScore = JSON.parse(event.body) as ScoreEntry;
    await prisma.player_scores.create({
      data: {
        player_id: BigInt(newScore.playerId),
        score: parseInt(newScore.score)
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(newScore)
    };
  }

  return {
    statusCode: 500
  };
}


export { handler }

