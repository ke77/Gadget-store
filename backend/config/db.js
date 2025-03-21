import { neon } from "@neondatabase/serverless";
import dotenv from 'dotenv';

dotenv.config()

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env


// this creates a sql connection using our env variables
export const sql = neon(
     `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
)

// this sql fxn we export is used as a tagged template literal, which allows us to write SQL queries safely