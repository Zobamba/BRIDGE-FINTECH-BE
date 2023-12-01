import passwordHash from 'password-hash';
import { signJsonWebToken, getErrorMessage } from '../utils/util';
import models from '../models';

const { user } = models;

class UserController {
  signUp(req, res) {
    user.create({
      email: req.body.email,
      country: req.body.country,
      phoneNumber: req.body.phoneNumber,
      passwordHash: passwordHash.generate(req.body.password),
    }).then((usr) => {
      res.status(201).send({
        id: usr.id,
        email: usr.email,
        country: usr.country,
        phoneNumber: usr.phoneNumber,
        message: 'User successfully created',
        token: signJsonWebToken(usr),
      });
    }).catch((error) => {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(409).send({
          message: `A user with the email '${req.body.email}' already exists`,
        });
      }

      res.status(400).send({
        message: 'An error occurred while trying to sign up. Please try again',
      });
    });
  }

  signIn(req, res) {
    user.findOne({
      where: {
        email: req.body.email,
      },
    }).then((usr) => {
      if (usr === null) {
        return res.status(401).send({ message: 'User not found' });
      }

      if (passwordHash.verify(req.body.password, usr.passwordHash)) {
        return res.status(201).send({
          id: usr.id,
          firstName: usr.firstName,
          lastName: usr.lastName,
          email: usr.email,
          message: 'Sign in successful',
          token: signJsonWebToken(usr),
        });
      }

      res.status(401).send({ message: 'User not found' });
    }).catch((error) => {
      // res.status(401).send(getErrorMessage(error));
      console.log(error);
    });
  }

  UpdateProfile(req, res) {
    user.update(
      {
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        surname: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        phoneNumber: req.body.phoneNumber,
        countryOfResidence: req.body.countryOfResidence,
        city: req.body.city,
        homeAddress: req.body.homeAddress,
        postalCode: req.body.postalCode,
        BVN: req.body.BVN,
        txnPin: req.body.txnPin,
      },
      { where: { id: req.user.id } },
    ).then((updated) => {
      if (updated) {
        return res.status(200).send({
          message: 'Profile updated successfully',
        });
      }
    });
  }
}

export default new UserController();