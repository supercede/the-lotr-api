import { config } from 'dotenv';
import { sortBy } from '../utils/sort';
import paginate from '../utils/pagination';
import axiosRequest from '../utils/request';

config();

const charController = {};

charController.getCharacters = async (req, res) => {
  try {
    const response = await axiosRequest('character');
    const characters = response.data;
    if (req.query.sort === 'race' || req.query.sort === 'gender') {
      characters.docs.sort(sortBy(req.query.sort));
    }
    //Paginate Results
    const limit = req.query.limit || 100;
    const pageNumber = req.query.page || 1;
    const data = paginate(characters.docs, pageNumber, limit);
    // console.log(characters.docs.length);

    res.status(200).json({
      status: 'success',
      data
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      error: err
    });
  }
};

export default charController;
