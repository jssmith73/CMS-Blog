const router = express.Router();
const {Comment} = require('../models');

class Comment extends Model {}

Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequ
    }
)

module.exports = router;