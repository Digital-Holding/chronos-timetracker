// @flow
import type {
  Id,
  WorklogsAction,
} from 'types';

import * as actionTypes from './actionTypes';


export const saveWorklogRequest = (
  payload: any,
): WorklogsAction => ({
  type: actionTypes.SAVE_WORKLOG_REQUEST,
  payload,
});

export const deleteOldWorklog = (
  payload: any,
): WorklogsAction => ({
  type: actionTypes.DELETE_OLD_WORKLOG,
  payload,
});

export const deleteWorklogRequest = (
  worklogId: Id,
): WorklogsAction => ({
  type: actionTypes.DELETE_WORKLOG_REQUEST,
  worklogId,
});

export const trySaveWorklogAgainRequest = (): WorklogsAction => ({
  type: actionTypes.TRY_SAVE_WORKLOG_AGAIN_REQUEST,
});

export const stopTrySaveWorklogRequest = (): WorklogsAction => ({
  type: actionTypes.STOP_TRY_SAVE_WORKLOG_REQUEST,
});

export const saveForLayer = (): WorklogsAction => ({
  type: actionTypes.SAVE_FOR_LATER,
});
