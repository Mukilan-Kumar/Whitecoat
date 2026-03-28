import mongoose, { Schema, Model } from 'mongoose';

export interface IPartner {
  name: string;
  logo: string;
  location?: string;
  description?: string;
  website?: string;
  email?: string;
  phone?: string;
  featured: boolean;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const PartnerSchema = new Schema<IPartner>(
  {
    name: {
      type: String,
      required: [true, 'Partner name is required'],
      trim: true,
    },
    logo: {
      type: String,
      required: [true, 'Logo is required'],
    },
    location: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    website: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Partner: Model<IPartner> =
  mongoose.models.Partner || mongoose.model<IPartner>('Partner', PartnerSchema);

export default Partner;
