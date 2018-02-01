'use strict'

// DEPENDENCIES
import cors from 'cors'
import morgan from 'morgan'
import express from 'express'
import * as mongo from './mongo.js'

// NOTE: Pulling in Server from http so that we can call on it directly
import {Server} from 'http'
