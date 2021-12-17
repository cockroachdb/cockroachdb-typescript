import { Handler } from '@netlify/functions'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const handler: Handler = async (event, context) => {
  // load all scores from the database and include player name
  // from the players table.
  const allScores = await prisma.player_scores.findMany({
    include: {
      players: {
        select: { 
          name: true
        }
      }
    },
    orderBy: {
      score: 'desc'
    }
  });

  return {
    statusCode: 200,
    body: JSON.stringify(allScores.map(score => (
      // flatten player name into score entry 
      { id: score.id, name: score.players.name, score: score.score }
    ))
    , (key, value) =>
      // need to add a custom serializer because CockroachDB IDs map to
      // JavaScript BigInts, which JSON.stringify has trouble serializing.
      typeof value === 'bigint'
        ? value.toString()
        : value 
    )
  }
}

export { handler }

