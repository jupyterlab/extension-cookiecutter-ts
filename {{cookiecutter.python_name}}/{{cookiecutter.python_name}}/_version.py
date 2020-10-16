import json
import os.path as osp

HERE = osp.abspath(osp.dirname(__file__))

with open(osp.join(HERE, 'package.json')) as fid:
    data = json.load(fid)

__version__ = pdata['version']
