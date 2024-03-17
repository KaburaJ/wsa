const { Sequelize } = require("sequelize");
const db = require("../config/db.js");
const bcrypt = require("bcrypt");
const op = Sequelize.Op;
const operatorsAliases = {
    $eq: op.eq,
    $or: op.or,
};

const loginUser = async ({ UserEmail, UserPassword }) => {
  try {
    const user = await db.User.findOne({
      where: {
        [op.or]: [
          { Email1: UserEmail },
          { Email2: UserEmail },
          { Email3: UserEmail },
          { Email4: UserEmail }
        ],
      }
    });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(UserPassword, user.AccountPassword);
    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    return user;
  } catch (error) {
    throw new Error("Failed to login user: " + error.message);
  }
};



const createUser = async ({
  AccountName,
  AccountPassword,
  CustomerName,
  Phone1,
  Phone2,
  Email1,
  Email2,
  Email3,
  Email4,
  Notes,
}) => {
  try {
    const newUser = await db.User.create({
      AccountName,
      AccountPassword,
      CustomerName,
      Phone1,
      Phone2,
      Email1,
      Email2,
      Email3,
      Email4,
      Notes,
    });
    return newUser;
  } catch (error) {
    throw new Error("Error occurred while creating user: " + error.message);
  }
};

const createSodiumHypochloriteValues = async ({
  AccountName,
  SodiumHypochloriteActualValue,
  SodiumHypochloriteTargetValue,
  SodiumHypochloriteLitres,
  SodiumHypochloriteCycles,
  SodiumHypochloriteStatusData,
  SodiumHypochlorite_DIS_L,
  SodiumHypochlorite_DPD_mL,
  SoftwareVersion
}) => {
  try {
    const newEntry = await db.ConnectedDeviceSodiumHypochlorite.create({
      AccountName,
      SodiumHypochloriteActualValue,
      SodiumHypochloriteTargetValue,
      SodiumHypochloriteLitres,
      SodiumHypochloriteCycles,
      SodiumHypochloriteStatusData,
      SodiumHypochlorite_DIS_L,
      SodiumHypochlorite_DPD_mL,
      SoftwareVersion
    });
    return newEntry;
  } catch (error) {
    throw new Error(
      "Error occurred while creating sodium hypochlorite entry: " +
        error.message
    );
  }
};

const createHCLValues = async ({
  AccountName,
  HCLActualValue,
  HCLTargetValue,
  HCLLitres,
  HCLCycles,
  HCLStatusData,
  HCL_PH_L,
  HCL_PH_mL,
  SoftwareVersion
}) => {
  try {
    const newEntry = await db.ConnectedDeviceHCL.create({
      AccountName,
      HCLActualValue,
      HCLTargetValue,
      HCLLitres,
      HCLCycles,
      HCLStatusData,
      HCL_PH_L,
      HCL_PH_mL,
      SoftwareVersion
    });
    return newEntry;
  } catch (error) {
    throw new Error(
      "Error occurred while creating sodium hypochlorite entry: " +
        error.message
    );
  }
};

const createWifiDetails = async ({
  connectedDeviceId,
  SSID,
  KEY
}) => {
  try {
    const newWifiEntry = await db.wifiDetails.create({
      connectedDeviceId,
      SSID,
      KEY
    });
    return newWifiEntry;
  } catch (error) {
    throw new Error("Error occurred while creating WIFI details: " + error.message);
  }
};

const getUsers = async () => {
  try {
    const { User } = db;
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error("Failed to fetch users: " + error.message);
  }
};

const getUserDetailsByAccountName = async (accountName) => {
  try {
    const { User } = db;
    const user = await User.findOne({
      where: { AccountName: accountName }
    });
    return user;
  } catch (error) {
    throw new Error("Failed to fetch user details: " + error.message);
  }
};

const getSodiumHypochloriteValue = async (accountName) => {
  try {
    const { ConnectedDeviceSodiumHypochlorite } = db;
    const sodiumHypochloriteValue = await ConnectedDeviceSodiumHypochlorite.findOne({
      where: { AccountName: accountName }
    });
    return sodiumHypochloriteValue;
  } catch (error) {
    throw new Error(
      "Error occurred while getting sodium hypochlorite value for specified device: " +
        error.message
    );
  }
};

const getHCLValue = async (accountName) => {
  try {
    const { ConnectedDeviceHCL } = db;
    const HCLValue = await ConnectedDeviceHCL.findOne({
      where: { AccountName: accountName }
    });
    return HCLValue;
  } catch (error) {
    throw new Error(
      "Error occurred while getting HCL value: " +
        error.message
    );
  }
};

const UserDeviceScheduler = async ({userId, AccountName, wakeTime, sleepTime}) => {
  try {
    const schedule = await db.UserDeviceSchedule.create({userId, AccountName, wakeTime, sleepTime});
    return schedule;
  } catch (error) {
    throw new Error(
      "Error occurred while setting the device schedule: " +
        error.message
    );
  }
};

const deleteUser = async (accountId) => {
  try {
    const { User } = db;
    await User.destroy({
      where: { Id: accountId }
    });
  } catch (error) {
    throw new Error("Failed to delete user: " + error.message);
  }
};

module.exports = {
  loginUser,
  createUser,
  getUsers,
  createSodiumHypochloriteValues,
  createHCLValues,
  getSodiumHypochloriteValue, 
  getHCLValue,
  getUserDetailsByAccountName,
  createWifiDetails,
  UserDeviceScheduler,
  deleteUser
};
