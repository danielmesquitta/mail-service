import { Router } from 'express';

import { mailServices } from './services';
import { mailValidator } from './validators';

const router = Router();

router.post('/', mailValidator.store, async (req, res) => {
  try {
    await mailServices.sendMail(req.body);
    return res.json({ message: 'E-mail successfully sent!' });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ error: 'Sorry, an error occurred while sending the e-mail' });
  }
});

export default router;
