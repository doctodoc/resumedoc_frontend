import {
  isStartDateBeforeEndDate,
  isValidFileType,
} from "@/utils/helperFunctions/validationFunctions";
import * as Yup from "yup";

export const buildResumeFormSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string(),
  jobTitle: Yup.string().required("Job title is required"),
  resumePic: Yup.mixed().test(
    "is-valid-type",
    "Not a valid image type",
    (value: any) => isValidFileType(value && value.name.toLowerCase(), "image")
  ),

  contactInformation: Yup.object().shape({
    phoneNumber: Yup.string(),
    email: Yup.string().email(),
    location: Yup.object().shape({
      country: Yup.string(),
      state: Yup.string(),
    }),
    socials: Yup.array().of(
      Yup.object().shape({
        linkedIn: Yup.string().url(),
        twitter: Yup.string().url(),
        instagram: Yup.string().url(),
        facebook: Yup.string().url(),
      })
    ),
  }),

  summary: Yup.string().required("Summary is required"),

  experience: Yup.array().of(
    Yup.object().shape({
      companyName: Yup.string().required("Company Name is Required"),
      jobTitle: Yup.string().required("job title is Required"),
      startDate: Yup.date().required("Start date is required "),
      endDate: Yup.date()
        .min(Yup.ref("startDate"))
        .required("End date is required"),
      description: Yup.string()
        .min(10, "minimum number of description characters is 10")
        .max(50, "max number of description characters is 50")
        .required("Experience description is required"),
    })
  ),

  education: Yup.array().of(
    Yup.object().shape({
      schoolName: Yup.string().required("school degree is Required"),
      schoolDegree: Yup.string().required("school degree is Required"),
      startDate: Yup.date().required("Start date is required "),
      endDate: Yup.date()
        .min(Yup.ref("startDate"))
        .required("End date is required"),
    })
  ),

  awards: Yup.array().of(
    Yup.object().shape({
      awardTitle: Yup.string().required("award title is Required"),
      yearOfAward: Yup.date().required("award date is Required"),
    })
  ),

  certificate: Yup.array().of(
    Yup.object().shape({
      certificateTitle: Yup.string().required("certificate title is Required"),
      yearOfCertificate: Yup.date().required("certificate date is Required"),
    })
  ),

  skills: Yup.array().of(
    Yup.object().shape({ id: Yup.string(), value: Yup.string() })
  ),

  volunteering: Yup.array().of(
    Yup.object().shape({
      volunteeringTitle: Yup.string().required(
        "volunteering title is Required"
      ),
      yearOfvolunteering: Yup.date().required("volunteering date is Required"),
    })
  ),

  //   transferType: Yup.string().required('Rransfer type is required'),
  //   debitAccount: Yup.object().shape({
  //     label: Yup.string(),
  //     value: Yup.string().required('Debit account is required'),
  //   }),
  //   beneficiaryAccount: Yup.object().shape({
  //     label: Yup.string(),
  //     value: Yup.string().required('Beneficiary account is required'),
  //   }),
  //   beneficiaryBank: Yup.object().shape({
  //     label: Yup.string(),
  //     value: Yup.string().when(['transferType'], {
  //       is: (transferType) => transferType === 'OtherBank',
  //       then: Yup.string().required('Beneficiary bank is required'),
  //       otherwise: Yup.string().notRequired(),
  //     }),
  //   }),
  // beneficiaryBank: Yup.string().when(['shouldSchedule', 'schedulePattern'], {
  //   is: (shouldSchedule, schedulePattern) => shouldSchedule && schedulePattern === 'one off',
  //   then: Yup.string().required('Schedule date is required for one-off transfers'),
  //   otherwise: Yup.string().notRequired(),
  // }),
  //   amount: Yup.number().required('Amount is required').positive('Amount must be a positive number'),
  //   description: Yup.string(),
  //   shouldSchedule: Yup.boolean(),
  // schedulePattern: Yup.mixed().when('shouldSchedule', {
  //   is: true,
  //   then: Yup.string().required('Please select a schedule pattern'),
  //   otherwise: Yup.mixed().notRequired(),
  // }),
  // scheduleStartDate: Yup.string().when(['shouldSchedule', 'schedulePattern'], {
  //   is: (shouldSchedule, schedulePattern) => {
  //     return shouldSchedule && schedulePattern !== 'one off'
  //   },
  //   then: Yup.string()
  //     .required('Start date is required for scheduled transfers')
  //     .test('is-before-end-date', 'Start date must be before end date', function (value) {
  //       return !value || !this.parent.scheduleEndDate || value < this.parent.scheduleEndDate
  //     }),
  //   otherwise: Yup.string().notRequired(),
  // }),
  // scheduleEndDate: Yup.string().when(['shouldSchedule', 'schedulePattern'], {
  //   is: (shouldSchedule, schedulePattern) => shouldSchedule && schedulePattern !== 'one off',
  //   then: Yup.string()
  //     .required('End date is required for scheduled transfers')
  //     .test('is-after-start-date', 'End date must be after start date', function (value) {
  //       return !value || !this.parent.scheduleStartDate || value > this.parent.scheduleStartDate
  //     }),
  //   otherwise: Yup.string().notRequired(),
  // }),
  // scheduleDate: Yup.string().when(['shouldSchedule', 'schedulePattern'], {
  //   is: (shouldSchedule, schedulePattern) => {
  //     console.log('should schedule', shouldSchedule)
  //     // console.log('this', this.parent)
  //     // return shouldSchedule && schedulePattern === 'one off'
  //     return false
  //   },
  //   then: Yup.string().required('Schedule date is required for one-off transfers'),
  //   otherwise: Yup.string().notRequired(),
  // }),
});
