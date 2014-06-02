/*
 * Copyright 2014 The Closure Compiler Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview NodeJS built-ins.
 * @externs
 * @see http://nodejs.org/api/process.html
 * @author d@darylkoop.com (Daryl Koopersmith)
 */

/**
 * @constructor
 * @extends {ChildProcess}
 */
function Process() {}

/**
 * @type {stream.WritableStream}
 * @see http://nodejs.org/api/process.html#process_process_stdout
 */
Process.prototype.stdout;

/**
 * @type {stream.WritableStream}
 * @see http://nodejs.org/api/process.html#process_process_stderr
 */
Process.prototype.stderr;

/**
 * @type {stream.ReadableStream}
 * @see http://nodejs.org/api/process.html#process_process_stdin
 */
Process.prototype.stdin;

/**
 * @type {Array.<string>}
 * @see http://nodejs.org/api/process.html#process_process_argv
 */
Process.prototype.argv;

/**
 * @type {string}
 * @see http://nodejs.org/api/process.html#process_process_execpath
 */
Process.prototype.execPath;

/**
 * @type {Array.<string>}
 * @see http://nodejs.org/api/process.html#process_process_execargv
 */
Process.prototype.execArgv;

/**
 * @see http://nodejs.org/api/process.html#process_process_abort
 */
Process.prototype.abort;

/**
 * @param {string} directory
 * @see http://nodejs.org/api/process.html#process_process_chdir_directory
 */
Process.prototype.chdir;

/**
 * @return {string}
 * @see http://nodejs.org/api/process.html#process_process_cwd
 */
Process.prototype.cwd;

/**
 * @type {Object.<string>}
 * @see http://nodejs.org/api/process.html#process_process_env
 * Includes common environment variables.
 */
Process.prototype.env = {
  HOME: '',
  PATH: '',
  PS1: '',
  PWD: '',
  SHELL: '',
  USER: ''
};

/**
 * @param {number=} code
 * @see http://nodejs.org/api/process.html#process_process_exit_code
 */
Process.prototype.exit;

/**
 * @return {number}
 * @see http://nodejs.org/api/process.html#process_process_getgid
 */
Process.prototype.getgid;

/**
 * @param {number} id
 * @see http://nodejs.org/api/process.html#process_process_setgid_id
 */
Process.prototype.setgid;

/**
 * @return {number}
 * @see http://nodejs.org/api/process.html#process_process_getuid
 */
Process.prototype.getuid;

/**
 * @param {number} id
 * @see http://nodejs.org/api/process.html#process_process_setuid_id
 */
Process.prototype.setuid;

/**
 * @return {Array.<number>}
 * @see http://nodejs.org/api/process.html#process_process_getgroups
 */
Process.prototype.getgroups;

/**
 * @param {Array.<number>} groups
 * @see http://nodejs.org/api/process.html#process_process_setgroups_groups
 */
Process.prototype.setgroups;

/**
 * @param {string|number} user
 * @param {string|number} extra_group
 * @see http://nodejs.org/api/process.html#process_process_initgroups_user_extra_group
 */
Process.prototype.initgroups;

/**
 * @type {string}
 * @see http://nodejs.org/api/process.html#process_process_version
 */
Process.prototype.version;

/**
 * @type {Object.<string>}
 * @see http://nodejs.org/api/process.html#process_process_versions
 */
Process.prototype.versions;

/**
 * @type {Object}
 * @see http://nodejs.org/api/process.html#process_process_config
 */
Process.prototype.config;

/**
 * @param {number} pid
 * @param {string|number=} signal
 * @see http://nodejs.org/api/process.html#process_process_kill_pid_signal
 */
Process.prototype.kill;

/**
 * @type {number}
 * @see http://nodejs.org/api/process.html#process_process_pid
 */
Process.prototype.pid;

/**
 * @type {string}
 * @see http://nodejs.org/api/process.html#process_process_title
 */
Process.prototype.title;

/**
 * @type {string}
 * @see http://nodejs.org/api/process.html#process_process_arch
 */
Process.prototype.arch;

/**
 * @type {string}
 * @see http://nodejs.org/api/process.html#process_process_platform
 */
Process.prototype.platform;

/**
 * @return {Object.<number>}
 * @see http://nodejs.org/api/process.html#process_process_memoryusage
 */
Process.prototype.memoryUsage;

/**
 * @param {Function} callback
 * @see http://nodejs.org/api/process.html#process_process_nexttick_callback
 */
Process.prototype.nextTick;

/**
 * @type {number}
 * @see http://nodejs.org/api/process.html#process_process_maxtickdepth
 */
Process.prototype.maxTickDepth;

/**
 * @param {number=} mask
 * @return {number}
 * @see http://nodejs.org/api/process.html#process_process_umask_mask
 */
Process.prototype.umask;

/**
 * @return {number}
 * @see http://nodejs.org/api/process.html#process_process_uptime
 */
Process.prototype.uptime;

/**
 * @return {Array.<number>}
 * @see http://nodejs.org/api/process.html#process_process_hrtime
 */
Process.prototype.hrtime;

/** @const {Process} */
var process;
